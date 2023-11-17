export class FileType {
    static readonly JSON = new FileType('json', 'application/json');
    static readonly HTML = new FileType('html', 'text/html');
    private constructor(private readonly key: string, public readonly contentType: any) {}

    toString() {
        return this.key;
    }
}

export type Config = {
    dynamoTable: string;
    product: string;
    project: string;
    staticDate: string;
};

export type DynamoTestDetails = {
    result: boolean;
    bucketPath: string;
};
