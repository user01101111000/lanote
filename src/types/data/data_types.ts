export type SettingProps = {
    lang: string,
    sound: boolean
}


export interface IMessage {
    name: string;
    fields: Fields;
    createTime: string;
    updateTime: string;
}

interface Fields {
    read: Read;
    id: Id;
    message: Id;
    date: Date;
}

interface Date {
    timestampValue: string;
}

interface Id {
    stringValue: string;
}

interface Read {
    booleanValue: boolean;
}