import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const ddbClient = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

const { Item } = await ddbDocClient.send(
  new GetCommand({
    TableName: "foo",
    Key: { PK: "foo" },
  })
);
