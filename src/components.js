import {useState} from "react";
import {TextInput, View, Button} from "react-native";
import {searchCompany} from "./api_calls";

export function SearchCompanyComponent() {
    const [name, setSearchQuery] = useState('')
    const handleSearch = async () => {
        let response = await searchCompany(name)
        console.log(response)
    }
    return (
    <View>
      <TextInput
        value={name}
        onChangeText={setSearchQuery}
        placeholder="Enter search query"
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
    );
}