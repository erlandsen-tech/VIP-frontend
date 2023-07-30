import {API, graphqlOperation} from "aws-amplify";
import {searchCompanyByName} from "./graphql/queries";

export async function searchCompany(name, exchange = null) {
    const input = {
        name: name
    }
    if (exchange) {
        input.exchange = exchange
    }
    return API.graphql(graphqlOperation(searchCompanyByName, {input}));
}