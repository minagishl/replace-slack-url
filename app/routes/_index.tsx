import { useState } from "react";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Replace Slack URL" },
    {
      name: "description",
      content:
        "A simple tool to convert Slack URLs between N High School and N Junior High School.",
    },
  ];
};

export default function Index() {
  const [url, setUrl] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");

  const replaceUrl = () => {
    if (url.startsWith("https://n-highschool.slack.com")) {
      setConvertedUrl(url.replace("n-highschool.slack.com", "n-jr.slack.com"));
    } else if (url.startsWith("https://n-jr.slack.com")) {
      setConvertedUrl(url.replace("n-jr.slack.com", "n-highschool.slack.com"));
    } else {
      setConvertedUrl("Invalid URL");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(convertedUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-md w-full p-4 bg-white rounded-lg">
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">Replace Slack URL</h1>
          <p className="text-gray-600">
            Enter a Slack URL to convert between N High School and N Junior
            High.
          </p>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Slack URL"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={replaceUrl}
            className="w-full bg-blue-500 text-white p-2 rounded-lg"
          >
            Convert URL
          </button>
          {convertedUrl && (
            <div className="flex items-center justify-between bg-gray-200 p-2 rounded-lg">
              <span className="text-gray-700 truncate">{convertedUrl}</span>
              <button onClick={copyToClipboard} className="p-1">
                📋
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
