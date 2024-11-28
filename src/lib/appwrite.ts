import { Client, Databases, ID } from "appwrite";

type configType = {
  endpoint: string;
  platform: string;
  projectId: string;
  databaseId: string;
  subscriptionCollectionId: string;
};

const config: configType = {
  endpoint: import.meta.env.VITE_ENDPOINT,
  platform: import.meta.env.VITE_PLATFORM,
  projectId: import.meta.env.VITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_DATABASE_ID,
  subscriptionCollectionId: import.meta.env.VITE_SUBSCRIPTION_COLLECTION_ID,
};

export const {
  endpoint,
  platform,
  projectId,
  databaseId,
  subscriptionCollectionId,
} = config;

export const client = new Client();

client.setEndpoint(endpoint).setProject(projectId);

export const database = new Databases(client);

export const submitForm = async (email: string) => {
  try {
    const result = await database.createDocument(
      databaseId,
      subscriptionCollectionId,
      ID.unique(),
      { email },
    );

    return result;
  } catch (submitError) {
    console.log("Error submitting form to the database:", submitError);
  }
};
