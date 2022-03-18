import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../../contexts/StateContext';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import uuid from 'react-native-uuid';
import * as yup from 'yup';

import {
    ScrollView,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import SimpleToast from 'react-native-simple-toast';
import Background from '../../../components/background';
import { styles } from '../../../styles';
import states from '../../../components/States';
import DatePicker from 'react-native-datepicker'



export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue('');

    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [local, setLocal] = useState('');
    const [loading, setLoading] = useState(false);
    const [hideDateText, setHideDateText] = useState(true)


    const handleRegisterButton = async () => {

        if (loading) {
            SimpleToast.show('Processando o cadastro!');
            return;
        }

        try {

            const schema = yup.object().shape({
                name: yup.string().required('Digite o nome'),
                state: yup.string().required('Escolha um estado'),
                city: yup.string().required('Defina a cidade'),
                date: yup.string().required('Defina a data'),
                hour: yup.string().required('Defina a hora'),
                local: yup.string().required('Digite o local')
            })

            await schema.validate({ avatar, name, state, city, date, hour, local })

            setLoading(true);

            let token = uuid.v4();
            let imageUrl = 'https://leituria.com/Content/Images/img-default.png'
            let belongsTo = context.objectData.diocese.token;
            let databaseRef = database().ref(`/bd/evento/${token}`);


            if (avatar) {
                let storageRef = storage().ref(`images/evento/${token}`);
                await storageRef.putFile(avatar.uri);
                imageUrl = await storageRef.getDownloadURL();
            }

            await databaseRef.set({
                token,
                name,
                state,
                city,
                date,
                hour,
                local,
                imageUrl,
                belongsTo
            });

            setLoading(false);

            SimpleToast.show('Cadastro concluído!');
            resetField();
            navigation.navigate('DioceseEvent');

        } catch (error) {
            if (error instanceof yup.ValidationError) {
                SimpleToast.show(error.message);
            }
            setLoading(false);
        }

    };

    const getPhoto = () => {
        let options = {
            mediaType: 'photo',
            maxWidth: 1280,
            maxHeight: 1280,
        };

        launchImageLibrary(options, (data) => {
            if (data.didCancel) {
                return;
            }
            if (data.errorCode) {
                return;
            }
            if (!data.assets[0].uri) {
                return;
            }

            setAvatar(data.assets[0]);

        })

    };

    const resetField = () => {
        setAvatar('');
        setName('');
        setDate('');
        setState('');
        setCity('');
        setHour('');
        setLocal('');
    };


    return (
        <SafeAreaView style={styles.container}>
            <Background />

            {loading && <ActivityIndicator style={styles.loadingIndicator} color="#dabe7b" size="large" />}

            <View style={styles.headerArea}>
                <View style={styles.welcomeArea}>
                    <Text style={styles.welcomeText}>Evento</Text>
                </View>

                <Image style={styles.smallLogo} source={require('../../../assets/logo_diocese.png')} />
            </View>


            <ScrollView style={styles.registerArea}>


                <TouchableOpacity style={styles.imagePickerButton} onPress={getPhoto}>
                    <Image
                        style={styles.imagePicker}
                        source={{
                            uri
                                : avatar
                                    ? avatar.uri : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'


                        }}
                    />
                </TouchableOpacity>


                <TextInput
                    style={styles.fullRegister}
                    value={name}
                    autoCapitalize='words'
                    placeholder='Nome do Evento'
                    onChangeText={(t) => setName(t)}
                />

                <View style={styles.registerSubArea}>
                    <View style={styles.halfRegister}>
                        <DatePicker
                            date={date}
                            mode="date"
                            hideText={hideDateText}
                            format="DD/MM/YYYY"
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    borderWidth: 0,
                                },
                                dateText: {
                                    fontSize: 16,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    alignSelf: 'flex-start',
                                }
                            }}
                            onDateChange={(t) => {
                                setDate(t)
                                setHideDateText(false)
                            }}
                        />

                        {hideDateText && <Text style={styles.datePickerText}>Data</Text>}
                    </View>

                    <View style={styles.halfRegister}>
                        
                    </View>
                    
                </View>

                <TextInput
                    style={styles.fullRegister}
                    value={local}
                    placeholder='Local'
                    onChangeText={(t) => setLocal(t)}
                />

                <View style={styles.registerSubArea}>
                    <TextInput
                        style={styles.halfRegister}
                        value={city}
                        placeholder='Cidade'
                        onChangeText={(t) => setCity(t)}
                    />


                    <View style={styles.halfRegister}>
                        <Picker
                            style={styles.picker}
                            selectedValue={state}
                            onValueChange={(t) => setState(t)}
                        >
                            <Picker.Item
                                value={''}
                                label={'Estado'}
                                color={'#999'}
                                enabled={false}
                            />
                            {
                                states.map((item, index) => {
                                    return <Picker.Item
                                        value={item}
                                        label={item}
                                        key={index}
                                        color={'#000'}
                                    />
                                })
                            }
                        </Picker>
                    </View>
                </View>


                <TouchableOpacity style={styles.registerButtonArea} onPress={handleRegisterButton}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView >
    );
};