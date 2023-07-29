import uuid from 'react-native-uuid'

export default class Id {
    static New(): string {
        return uuid.v4().toString()
    }
}