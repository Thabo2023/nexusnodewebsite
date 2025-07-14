import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default PartnersPage;