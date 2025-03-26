import { createClient  } from "@supabase/supabase-js";
import { Database } from "./database.types";

export const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
);


export async function getTourDates(){
    const {data, error} = await supabase.from("koncerti").select();
    if (error) {
        console.error("Error fetchting tour dates", error);
        return [];
    }
    return data || [];
}
