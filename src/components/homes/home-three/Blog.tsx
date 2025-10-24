import Image from "next/image";
import blogShape from "@/assets/img/shapes/three-round-yellow.png";
import blog_data from "@/data/blogData";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="blog-area-three pb-90 rel z-1 mt-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-title text-center mb-60">
              <span className="section-title__subtitle mb-10">
                Nos Services
              </span>
              <p>
                Des solutions informatiques personnalisées pour la réussite de
                votre entreprise
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blog_data
            .filter((item) => item.page === "home_3")
            .map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6">
                <div className={`blog-item--three`}>
                  <div className="blog-item__img">
                    <Image src={item.thumb} alt="Blog" />
                  </div>
                  <div className="blog-item__content">
                    <h4>
                      <Link href={item.link}>{item.title}</Link>
                    </h4>
                    <p className="limited-text">{item.desc}</p>
                    <Link href={item.link} className="read-more-two">
                      Plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Image
        className="blog-shape-one top_image_bounce"
        src={blogShape}
        alt="Shape"
      />
    </div>
  );
};

export default Blog;
