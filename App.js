import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    SafeAreaView,
} from 'react-native';
import CompanyList from "./src/components";
import {withAuthenticator, useAuthenticator} from '@aws-amplify/ui-react-native';

import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';

Amplify.configure(awsExports);

const initialState = {name: '', description: ''};

const App = () => {

    const [searchQuery, setSearchQuery] = useState('');

    // retrieves only the current value of 'user' from 'useAuthenticator'
    const userSelector = (context) => [context.user]
    const SignOutButton = () => {
        const {user, signOut} = useAuthenticator(userSelector);
        if (!user) return null;
        if (!user.username) {
            return <Text>Loading ...</Text>
        }
        return (
            <Pressable onPress={signOut} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Hello {String(user.username)}! Click here to sign out!</Text>
            </Pressable>
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Search box</Text>
            <CompanyList/>
            <View style={styles.container}>
                <SignOutButton/>
            </View>
        </SafeAreaView>
    );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignSelf: 'center' },
  input: { backgroundColor: 'black', marginBottom: 10, padding: 8, fontSize: 18, color: 'white' },
  buttonContainer: { alignSelf: 'center', backgroundColor: 'white', paddingHorizontal: 8 },
  buttonText: { color: 'black', padding: 16, fontSize: 18 },
});