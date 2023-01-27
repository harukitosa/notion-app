import * as dotenv from "dotenv";
import { Client } from "@notionhq/client";
dotenv.config();

const main = async () => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });
};

main();
