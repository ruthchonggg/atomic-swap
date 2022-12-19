package com.crosschain.flows;

import co.paralleluniverse.fibers.Suspendable;
import com.crosschain.states.Bond;
import net.corda.core.contracts.StateAndRef;
import net.corda.core.flows.FlowException;
import net.corda.core.flows.FlowLogic;
import net.corda.core.flows.InitiatingFlow;
import net.corda.core.flows.StartableByRPC;
import net.corda.core.node.services.Vault;
import net.corda.core.node.services.vault.Builder;
import net.corda.core.node.services.vault.CriteriaExpression;
import net.corda.core.node.services.vault.FieldInfo;
import net.corda.core.node.services.vault.QueryCriteria;

import java.util.Collections;
import java.util.List;

import static net.corda.core.node.services.vault.QueryCriteriaUtils.getField;

public class CheckBond  {

    @InitiatingFlow
    @StartableByRPC
    public static class CheckBondById extends FlowLogic<Bond> {
        private String bondId;

        public CheckBondById(String bondId) {
            this.bondId = bondId;
        }

        @Override
        @Suspendable
        public Bond call() throws FlowException {
            StateAndRef<Bond> bondStateAndRef = getServiceHub().getVaultService()
                    .queryBy(Bond.class)
                    .getStates()
                    .stream()
                    .filter(data -> data.getState().getData().getLinearId().getId().toString().equals(bondId))
                    .findAny()
                    .orElseThrow(() -> new IllegalArgumentException("Bond state with the id " + bondId + "cannot be found"));
            Bond bondState = bondStateAndRef.getState().getData();
            return bondState;
        }
    }


    @InitiatingFlow
    @StartableByRPC
    public static class CheckHoldingBonds extends FlowLogic<List<Bond>> {

        public CheckHoldingBonds() {
        }

        @Override
        @Suspendable
        public List<Bond> call() throws FlowException {
            try {
                //query unconsumed states
                QueryCriteria.LinearStateQueryCriteria criteria1 = new QueryCriteria.LinearStateQueryCriteria()
                    .withStatus(Vault.StateStatus.UNCONSUMED)
                    .withRelevancyStatus(Vault.RelevancyStatus.RELEVANT);

                System.out.println("Get Field");

                // query holder
                FieldInfo bondHolder = getField("holder", Bond.class);
                CriteriaExpression verifyHolder = Builder.equal(bondHolder, getOurIdentity());
                QueryCriteria criteria2 = new QueryCriteria.VaultCustomQueryCriteria(verifyHolder);

                System.out.println("Query");

                List<StateAndRef<Bond>> queryResults = getServiceHub().getVaultService().queryBy(Bond.class, criteria1.and(criteria2)).getStates();
                List<Bond> resultsList = (List<Bond>) queryResults.stream().map(bondState -> bondState.getState().getData());
                return resultsList;
            } catch (Exception e) {
                throw new FlowException(e.getMessage());
            }
       }
    }
}
