import { supabase } from "@/app/lib/supabaseService";

// GET method handler
export async function GET() {
  console.log("calling");

  try {
    // Fetching data from the Supabase "koncerti" table
    const { data, error } = await supabase.from("koncerti").select();

    if (error) {
      return new Response(
        JSON.stringify({ error: "Napaka pri pridobivanju podatkov" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Returning fetched data as a JSON response
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Internal server error:", err);
    return new Response(
      JSON.stringify({ error: "Notranja napaka strežnika" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
