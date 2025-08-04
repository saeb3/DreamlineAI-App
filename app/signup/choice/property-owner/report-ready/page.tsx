import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Report Ready',
}

export default function ReportReady() {
  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
        <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
            <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
            <button className="text-3xl">☰</button>
        </header>
        <main className="max-w-xl mx-auto p-4 space-y-6">
            {/* Card 1 */}
            <section className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center space-y-4">
                <Image
                src="/images/signup/report ready.png"
                alt="Report ready"
                width={120}
                height={120}
                />
                <h1 className="text-xl font-semibold">Your home report is ready!</h1>
                <p className="text-gray-600">
                Your Energy Assessment Report is ready! Dive into valuable insights and
                recommendations for your home’s energy efficiency.
                </p>
                <Link
                href="/signup/choice/property-owner/report-ready/view-report"
                className="mt-2 inline-block px-6 py-2 bg-blue-600 text-white rounded-full block w-full text-center" 
                >
                View Report
                </Link>
            </section>

            {/* Card 2 */}
            <section className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center space-y-4">
                <Image
                src="/images/signup/undraw_mobile_payments_re_7udl 1.png"
                alt="Matched incentives"
                width={120}
                height={500}
                />
                <h2 className="text-xl font-semibold">Discover your matched incentives</h2>
                <p className="text-gray-600">
                Your personalized list of incentives tailored to your home is now available
                for viewing. Click here to explore the incentives you’re eligible for and
                start saving on energy-efficient upgrades.
                </p>
                <Link
                href="/signup/choice/property-owner/incentives"
                className="mt-2 inline-block px-6 py-2 bg-blue-600 text-white rounded-full block w-full text-center"
                >
                Incentives
                </Link>
            </section>
        </main>
    </div>
  )
}