import {useState, Component} from "react";
import {TextInput, View, Button, FlatList} from "react-native";
import {List, ListItem} from "react-native-elements";
import {searchCompany} from "./api_calls";

const searchCompanyFunc = async (name, callback) => {
    try {
        const response = await searchCompany(name);
        const jsonResponse = response.data.searchCompanyByName;
        console.log(jsonResponse)
        callback(jsonResponse, null);
    } catch (error) {
        console.log(error)
        callback(null, error)
    }
}


class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "", companies: [], error: null
        };
    }

    handleSearchQueryChange = (searchQuery) => {
        this.setState({searchQuery: searchQuery});
    };
    handleSearch = async () => {
        const {searchQuery} = this.state;
        if (searchQuery.trim() !== "") {
            this.setState({companies: [], error: null});
            await searchCompanyFunc(searchQuery, this.handleSearchResult)
        }
    };
    handleSearchResult = (companies, error) => {
        if (error) {
            this.setState({error});
        } else {
            this.setState({companies});
        }
    };

    render() {
        const {searchQuery, companies, error} = this.state;

        return (
            <View>
                <TextInput
                    value={searchQuery}
                    onChangeText={this.handleSearchQueryChange}
                    placeholder="Search Company"
                />
                <Button title="Search" onPress={this.handleSearch}/>
                {companies && (
                    <FlatList
                        data={companies}
                        renderItem={({item}) => (
                            <ListItem
                                title={item.name}
                                subtitle={item.description}
                            />
                        )}
                    />)
                }
            </View>);
    }
}

export default CompanyList;

let ex_resp = {
    "data": {
        "searchCompanyByName": {
            "statusCode": 200, "headers": {
                "Content-Type": "application/json"
            }, "body": {
                "Companies": [{
                    "symbol": "TEST.V",
                    "name": "FluroTech Ltd.",
                    "currency": "CAD",
                    "stockExchange": "TSXV",
                    "exchangeShortName": "TSX"
                }]
            }
        }
    }
};