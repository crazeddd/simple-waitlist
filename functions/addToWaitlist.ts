export async function onRequestPost(context: any) {
    const { email } = await context.json();

    try {
        await env.DB
            .prepare("INSERT INTO emails (email) VALUES (?)")
            .bind(email)
            .run();

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return new Response(JSON.stringify({ error: "Failed to add user to waitlist." }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }
    }

}