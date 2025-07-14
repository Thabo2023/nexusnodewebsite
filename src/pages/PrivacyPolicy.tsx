import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Privacy <span className="bg-gradient-tech bg-clip-text text-transparent">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground space-y-8">
              <div className="text-center text-muted-foreground mb-8">
                <p><strong>Effective Date:</strong> 05 July 2025</p>
                <p><strong>Last Updated:</strong> 05 July 2025</p>
              </div>

              <p className="text-lg leading-relaxed">
                At Nexusnode, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect the personal information you may provide through our website and services.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <p><strong>Personal Data:</strong> Name, email address, company name, phone number, and other contact details you provide via forms or emails.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p>We use the information to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Respond to inquiries or requests</li>
                    <li>Send updates, newsletters, or promotional material (if opted in)</li>
                    <li>Analyze website usage and performance</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Sharing of Information</h2>
                  <p>We do not sell your personal information.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                  <p>Request a copy of the data we hold about you</p>
                  <p>Please contact us for any such requests at: info@nexusnode.co.za</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Changes to This Policy</h2>
                  <p>We may update this Privacy Policy periodically. Changes will be posted here with an updated effective date.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                  <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                  <p><strong>Email:</strong> info@nexusnode.co.za</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;