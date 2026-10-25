import Image from "next/image";

const QUESTIONNAIRE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9Cfti_Bd3qKMr4XG_JYdV-8ndQNde5PNWvqKGHgkdpQGB9Q/viewform?usp=dialog";

const MAILING_LIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdNXL0WM5k1cws3vQSNm_ykj_VeEe_XPWqw7YYzS6dVjTa0XQ/viewform?usp=publish-editor";

const MIRANDA_JULY_URL = "https://substack.com/@mirandajuly/p-187687708";

export default function Home() {
  return (
    <div className="relative min-h-full">
      <div className="grain" aria-hidden />

      <aside className="relative flex h-[46vh] flex-col items-center justify-center bg-[#9ee8b8] p-5 sm:p-6 lg:fixed lg:inset-y-0 lg:left-0 lg:h-screen lg:w-1/2 lg:p-10">
        <div className="relative min-h-0 w-full flex-1">
          <Image
            src="/hero.png"
            alt="Illustration of a face with ocean waves and red irises in the eyes, tears falling. Credited to Miki Kim."
            fill
            priority
            className="object-contain object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <p className="mt-3 shrink-0 text-center font-[family-name:var(--font-newsreader)] text-[11px] tracking-wide text-ink/55 italic sm:text-xs">
          Illustration credited to Miki Kim
        </p>
      </aside>

      <main className="relative flex flex-col justify-center px-6 py-10 lg:ml-[50%] lg:min-h-screen lg:px-16 lg:py-20">
          <p className="font-[family-name:var(--font-fraunces)] text-[11px] font-semibold tracking-[0.32em] text-ink/70 uppercase">
            Hamilton, Ontario
          </p>

          <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.92] font-semibold tracking-[-0.03em] text-ink">
            Beguiled
            <br />
            <em className="font-medium text-iris">Hamilton</em>
          </h1>

          <p className="mt-5 max-w-xl text-xl leading-snug text-ink/80 italic sm:text-2xl">
            An in-depth dating service for one person at a time.
          </p>

          <div className="mt-8 h-px max-w-xl bg-ink/15" />

          <article className="mt-8 max-w-xl space-y-5 text-[1.05rem] leading-[1.7] text-ink/90 sm:text-[1.12rem]">
            <p>
              Beguiled Hamilton is an experiment based on{" "}
              <a
                href={MIRANDA_JULY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-wave underline decoration-wave/40 underline-offset-4 transition-colors hover:text-iris hover:decoration-iris/50"
              >
                Miranda July&apos;s project
              </a>{" "}
              of the same name. Our goal is to create connections between people
              in Hamilton (and beyond), and it basically functions like an
              in-depth dating service for one person at a time.
            </p>

            <p>
              Each month we&apos;ll feature one person looking for a
              date/relationship/intimate connection: this is our Beguiler. That
              person will have answered a (long!) questionnaire based on the one
              Miranda July created, and their answers will be published here.
              And if you, dear reader, find yourself interested in contacting
              our Beguiler{" "}
              <span className="whitespace-nowrap">
                – in other words, beguiled –
              </span>{" "}
              you will fill out the same questionnaire and we&apos;ll forward
              your submission to them. Et voilà! A match is (maybe, hopefully)
              made.
            </p>

            <p>
              Any potential suitor can also check a box to have their
              questionnaire be made eligible for a future monthly profile, and
              thus will begin a long and prosperous course of connection between
              the wonderful humans of Hamilton — fingers crossed!
            </p>

            <p>
              As we are just getting started, we are currently looking for our
              debut Beguiler. So if you&apos;re interested in being one, please
              fill out the questionnaire below. From there we&apos;ll pick our
              first official Beguiler, and our little matchmaking experiment
              will begin...
            </p>

            <p>
              Thank you for being here and trying this out! If you have any
              questions, email us at{" "}
              <a
                href="mailto:beguiledhamilton@gmail.com"
                className="text-wave underline decoration-wave/40 underline-offset-4 transition-colors hover:text-iris hover:decoration-iris/50"
              >
                beguiledhamilton@gmail.com
              </a>
              .
            </p>
          </article>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={QUESTIONNAIRE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-iris px-7 py-3.5 font-[family-name:var(--font-fraunces)] text-lg font-semibold tracking-wide text-paper shadow-[4px_4px_0_0_#1a120e] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#1a120e]"
            >
              Fill out the questionnaire
            </a>
            <p className="text-sm text-ink/60 italic">
              Same form for Beguilers and the beguiled.
            </p>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/50">
            Not sure you want to be a Beguiler but want us to keep you in the
            loop when the first one goes up?{" "}
            <a
              href={MAILING_LIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-iris hover:decoration-iris/40"
            >
              Join our mailing list!
            </a>
          </p>
        </main>
    </div>
  );
}
