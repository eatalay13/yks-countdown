import Countdown from "@/components/Countdown";
import moment from "moment";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
      <h1 className="text-xl font-bold text-center dark:text-white">
        YKS Geri Sayım
      </h1>
      <div className="text-center">
        <Countdown targetDate={moment("2025-06-21T10:00").toDate()} />
      </div>
      <footer className="text-center text-neutral-content text-gray-600/50">
        <p>
          Powered by{" "}
          <a
            href="https://eatalay.dev"
            className="text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            eatalay.dev
          </a>
        </p>
      </footer>
    </main>
  );
}
