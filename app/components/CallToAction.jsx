// /components/CallToAction.js

export default function CallToAction() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="card rounded-xl p-10 md:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find What's Yours?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Join the community and help make our campus a place where nothing stays lost for long. Sign up now to post an item or browse the listings.</p>
                    <a href="#" className="cta-button text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 inline-block">
                        Get Started Now
                    </a>
                </div>
            </div>
        </section>
    );
}