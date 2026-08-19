import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) return;

    // Temporary mock submission.
    // Later this will connect to Firebase.
    setSubscribed(true);
    setEmail("");
  }

  return (
    <section className="mt-14 overflow-hidden rounded-2xl bg-slate-950">
      <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-2 text-blue-400">
              <Mail size={18} />

              <span className="text-xs font-bold uppercase tracking-wider">
                Finsight Newsletter
              </span>
            </div>

            <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Stay ahead of the market.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Get the latest business news, market updates, economic insights
              and technology stories delivered straight to your inbox.
            </p>
          </div>

          {/* Form */}
          <div>
            {subscribed ? (
              <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                <CheckCircle size={22} className="shrink-0 text-emerald-400" />

                <div>
                  <p className="font-semibold text-white">You're subscribed!</p>

                  <p className="mt-1 text-sm text-slate-400">
                    We'll keep you updated with the latest from Finsight.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="h-12 w-full rounded-lg border border-slate-700 bg-slate-900 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            <p className="mt-3 text-xs text-slate-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
