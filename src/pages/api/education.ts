import data from "@/app/data.json"
import type { NextApiRequest, NextApiResponse } from 'next'

export type EducationData = {
    title: string
    content: string
}

export type EducationDataIndex = {
    [key: number]: EducationData
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.id == undefined) {
        return res.status(404).json({ error: "no id was supplied" });
    } else {
        let parsedId: number;
        try {
            parsedId = parseInt(req.query.id.toString())
        } catch (error) {
            return res.status(500).json({ error: "failed to parse string to integer" });
        }
        // Typecasting
        const result = (data as EducationDataIndex)[parsedId]
        if (result == null) {
            return res.status(404).json({ error: `education with id ${parsedId} was not found`});
        }
        return res.json(result);
    }
}

