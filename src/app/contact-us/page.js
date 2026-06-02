export default function ContactPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-20">

            <h1 className="text-5xl font-bold mb-10">
                Contact Us
            </h1>

            <form className="space-y-6">

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-4 rounded-xl"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-4 rounded-xl"
                />

                <textarea
                    placeholder="Message"
                    rows="6"
                    className="w-full border p-4 rounded-xl"
                />

                <button className="bg-black text-white px-8 py-4 rounded-xl">
                    Send Message
                </button>

            </form>

        </main>
    );
}