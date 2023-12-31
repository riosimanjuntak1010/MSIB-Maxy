import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import Calendar from 'react-native-calendars/src/calendar';

const Calendar = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <View>
            <TouchableOpacity
                onPress={() => setShowModa(true)}
                style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    margin: 40,
                    padding: 10,
                    width: 200,
                    alignItems: 'center',
                }}>
                    <Text style={{color: 'white', fontSize: 22}}>Show Calendar</Text>
                </TouchableOpacity>
                <Modal visible={showModal} animationType="fade">
                    <Calendar style={{borderRadius: 10, elevation: 4, margin: 40}}
                    onDayPress={date => {
                        console.log(date)
                        setShowModal(false)
                    }}
                    initialDate={'2022-09-10'}
                    minDate={"2022-01-01"}
                    maxDate={"2022-12-31"}
                    />
                </Modal>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Calendar;
