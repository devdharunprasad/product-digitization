"use client";
import { useProductStore } from "@/app/zustand/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Ear, Microphone } from "phosphor-react";
import React, { useEffect, useState } from "react";

const Mic = () => {


  const [transcript, setTranscript] = useState("");
  const [speechStatus, setSpeechStatus] = useState("Tap to speak!");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { product_store, addProduct } = useProductStore((state) => state);

  const router = useRouter();
let handleSpeech
  if(typeof window !== "undefined"){
    const SpeechRecognition =
      window?.SpeechRecognition || window?.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
   handleSpeech = async () => {
    setSpeechStatus("Listening!");
    recognition.start();

    // start recognition
  };

  recognition.onspeechend = function () {
    // when user is done speaking
    recognition.stop();
    setSpeechStatus("Tap to speak!");
  };

  // This runs when the speech recognition service returns result
  recognition.onresult = async function (event) {
    setSpeechStatus("Tap to speak!")
    setTranscript(event.results[0][0].transcript);
    setIsLoading(true);
    setError(null);
    try {
      const transcript = event.results[0][0].transcript;
      const { data } = await axios.post(
        "https://ondchackathon-production.up.railway.app/text_catalog/",
        {
          input: transcript,
        }
      );

      addProduct(data);
      router.push("/add-product-page");
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false);
    }

    // var confidence = event.results[0][0].confidence;
  };
}
  return (
    <section className="h-screen flex flex-col gap-5 justify-center items-center bg-primary_blue">
     {!isLoading && <> <div
        className="border-2 border-white rounded-full w-40 h-40 flex justify-center items-center p-5"
        onClick={handleSpeech}
      >
        {speechStatus === "Tap to speak!" ? (
          <Microphone size={56} color="white" />
        ) : (
          <Ear size={56} color="white" />
        )}
      </div>
      <p className="text-white">{speechStatus}</p>
      </>}
      {isLoading && <p className="text-white">Processing...</p>}
      {error && <p className="text-red-700 font-semibold">{error}</p>}

      <p className="text-white">{transcript}</p>
    </section>
  );
};

export default Mic;
