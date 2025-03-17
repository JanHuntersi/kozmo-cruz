import { createClient  } from "@supabase/supabase-js";
import { Database } from "./database.types";

export const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
);

interface Concert {
    city: string | null;
    created_at: string;
    date_text: string | null;
    daytime_text: string | null;
    event_date: string | null;
    id: number;
    link: string | null;
    venue: string | null;
}


export async function getTourDates(): Promise<Concert[]>{
    const {data, error} = await supabase.from("koncerti").select();
    if (error) {
        console.error("Error fetchting tour dates");
        return [];
    }
    return data || [];
}
