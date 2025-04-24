import Layout from '../components/Layout';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';

const Index = () => {
  return (
    <Layout>
      <div className="h-screen overflow-y-auto">
        <section className="min-h-screen flex items-center justify-center">
          <Header />
        </section>
        <section className="min-h-screen flex items-center justify-center bg-space-light">
          <Timeline />
        </section>
        {/* <section className="min-h-screen flex items-center justify-center">
          <Projects />
        </section> */}
      </div>
    </Layout>
  );
};

export default Index;
