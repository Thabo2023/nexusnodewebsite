import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Terms and <span className="bg-gradient-tech bg-clip-text text-transparent">Conditions</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground space-y-8">
              <div className="text-center text-muted-foreground mb-8">
                <p><strong>Effective Date:</strong> 05 July 2025</p>
                <p><strong>Last Updated:</strong> 05 July 2025</p>
              </div>

              <p className="text-lg leading-relaxed">
                Welcome to Nexusnode. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the website.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Use of Website</h2>
                  <p>You agree to use this site only for lawful purposes. You must not:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Interfere with or disrupt the website</li>
                    <li>Attempt to access data not intended for you</li>
                    <li>Use any content for commercial purposes without written consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
                  <p>All content on this site, including the logo, branding, visuals, and text, is owned by or licensed to Nexusnode and may not be reused without permission.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Disclaimers</h2>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>All services and content are provided "as is" with no warranties.</li>
                    <li>We do not guarantee the accuracy or completeness of data presented on this site.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
                  <p>Nexusnode shall not be liable for any indirect or consequential damages arising from the use of this site or services.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
                  <p>We reserve the right to restrict or terminate access to the site if we believe you've violated these terms.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
                  <p>These terms shall be governed by and interpreted according to the laws of South Africa.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
                  <p>We may revise these Terms at any time. Continued use of the website implies acceptance of the updated terms.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
                  <p>For any questions about these terms, please reach out to:</p>
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

export default TermsOfService;