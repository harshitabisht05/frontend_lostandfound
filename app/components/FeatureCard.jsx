// /components/FeatureCard.js

export default function FeatureCard({ icon: Icon, title, description }) {
    return (
        <div className="card p-8 rounded-xl text-center feature-card-hover transition-all duration-300">
            <div className="mx-auto bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-sky-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400">{description}</p>
        </div>
    );
}