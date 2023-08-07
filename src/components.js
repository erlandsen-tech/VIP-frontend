import {useState, Component} from "react";
import {TextInput, View, Button, FlatList, Text, StyleSheet} from "react-native";
import {searchCompany} from "./api_calls";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
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
            <View style={{flex: 1}}>
                <TextInput
                    value={searchQuery}
                    onChangeText={this.handleSearchQueryChange}
                    placeholder="Search Company"
                />
                <Button title="Search" onPress={this.handleSearch}/>
                {companies && (
                    <FlatList
                        contentContainerStyle={{paddingBottom: 20}}
                        data={companies}
                        renderItem={({item}) =>
                            <Text style={styles.item}>{item.symbol} , {item.name}</Text>}/>
                )}
            </View>
        );
    }
}

export default CompanyList;