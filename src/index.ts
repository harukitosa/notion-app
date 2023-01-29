#!/usr/bin/env node
import * as dotenv from "dotenv"
import { Client } from "@notionhq/client"
dotenv.config()

/**
 * 使用したいページでadd connectionsを選択する必要がある
 */
const databaseID = ""
const main = async () => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    })
    const response = await notion.pages.create({
        parent: {
            database_id: databaseID,
        },
        properties: {
            Name: {
                title: [
                    {
                                    text: {
                                        content: "Tuscan Kale",
                        },
                    },
                ],
            },
            Description: {
                rich_text: [
                    {
                        text: {
                            content: "A dark green leafy vegetable",
                        },
                    },
                ],
            },
        },
    })
    console.log(response)
}

console.log("apxd")
main()
