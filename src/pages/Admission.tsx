import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { FileText, CheckCircle2, AlertCircle, Info } from "lucide-react";

export default function Admission() {
  return (
    <>
      <Helmet>
        <title>Admission Rules & Process | Sikar EduHub</title>
        <meta name="description" content="General rules and compulsory documents for admission in Sikar's top schools and coaching institutes." />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Admission Process & Rules</h1>
            <p className="text-slate-600">Please read the following guidelines and requirements carefully for a smooth admission process.</p>
          </motion.div>

          <div className="space-y-8">
            {/* Registration Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Registration</h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Parents are requested to submit their ward’s registration form on the specified date.
              </p>
            </motion.section>

            {/* General Rules Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Important Guidelines</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Eligible candidates are advised to deposit the duly-filled in Application Forms along with necessary documents by the due date.",
                  "Admission will be treated as final only when fee has been deposited. If not deposited by the due date the admission will be cancelled.",
                  "Fee once deposited shall not be refunded.",
                  "Please obtain your Fee Deposit Receipt which should be kept safely for future use.",
                  "Admission can be refused and cancelled by the Director/Principal without assigning any reason.",
                  "The Advisory Committee will guide and help the students as and when needed."
                ].map((rule, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Compulsory Documents Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Info className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Compulsory Documents</h2>
              </div>
              <p className="text-slate-500 mb-6 italic">For fresh students, the following documents are compulsory:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Original & one photocopy of Secondary Examination Mark Sheet.",
                  "Original & one photocopy of the qualifying examination Mark Sheet.",
                  "Original Transfer Certificate from the previous institution.",
                  "Original Character Certificate from the previous institution.",
                  "Original Migration Certificate (other than students from Rajasthan Board).",
                  "Two passport size colored recent photographs."
                ].map((doc, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm text-slate-700 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
}
