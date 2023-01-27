#!/usr/bin/env node
import * as dotenv from "dotenv";
import { Client } from "@notionhq/client";
dotenv.config();

/**
 * 使用したいページでadd connectionsを選択する必要がある
 */
export const main = async () => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });
    const response = await notion.users.list({});
    console.log(response);
};


console.log("start");
main();
