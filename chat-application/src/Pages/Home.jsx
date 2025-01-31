import { useEffect, useState } from "react";
import { HfInference } from "@huggingface/inference";

function Home() {
    const [prompt, setPrompt] = useState("");
    const client = new HfInference(import.meta.env.HF_TOKEN);

    // useEffect(() => {
    //     const fetchStory = async() => {
    //         let out = "";

    //         const stream = client.chatCompletionStream({
    //             model: "Qwen/Qwen2.5-72B-Instruct",
    //             messages: [
    //                 { role: "user", content: "Tell me a story" }
    //             ],
    //             temperature: 0.5,
    //             max_tokens: 2048,
    //             top_p: 0.7
    //         });

    //         for await (const chunk of stream) {
    //             if (chunk.choices && chunk.choices.length > 0) {
    //                 const newContent = chunk.choices[0].delta.content;
    //                 out += newContent;
    //                 console.log(newContent);
    //             }  
    //         }
    //     };

    //     fetchStory();
    // }, []);

    return (
        <div className="flex p-2 w-full h-full">
            <div className="flex w-full justify-end flex-col">
                <div className="flex-1 flex-col">
                    <div className="grid grid-2">

                    </div>
                </div>
                <div className="h-auto flex-col w-full">
                    <form className="w-full h-auto justify-end">
                        <input 
                            className="w-full h-9 rounded-3xl shadow-custom text-black pt-4 pb-4 pl-5 pr-5 focus:outline-none focus:shadow-blue-500"
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;