// /components/TestimonialCard.js

export default function TestimonialCard({ quote, name, role, avatarUrl }) {
    return (
        <div className="card p-8 rounded-xl">
            <p className="text-slate-300 mb-6">"{quote}"</p>
            <div className="flex items-center">
                <img src={avatarUrl} alt={`${name} photo`} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <p className="text-white font-bold">{name}</p>
                    <p className="text-sky-400 text-sm">{role}</p>
                </div>
            </div>
        </div>
    );
}