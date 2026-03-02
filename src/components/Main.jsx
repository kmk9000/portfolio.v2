import Typography from "@mui/material/Typography";
import Projects from "./Projects";

export default function Main() {
  return (
    <div
      className="main-container relative z-10 h-screen w-full scroll-auto overflow-auto border-white/10 bg-slate-900/60 px-6 py-8 text-slate-100 backdrop-blur-sm sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:w-3/4"
      style={{ scrollPaddingTop: "150px" }}
    >
      <Typography
        id="about"
        variant="h5"
        sx={{ mt: 4, mb: 1, scrollMarginTop: "150px" }}
        gutterBottom
      >
        About
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the about section of my portfolio.
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ color: "#cbd5e1" }}>
        I am a passionate front-end developer with a knack for crafting
        responsive and visually appealing web applications. With a strong
        foundation in HTML, CSS, and JavaScript, I specialize in creating
        seamless user experiences that are both functional and aesthetically
        pleasing. My expertise extends to modern frameworks like React, allowing
        me to build dynamic and interactive interfaces. I am dedicated to
        writing clean, maintainable code and continuously learning new
        technologies to stay at the forefront of web development trends.
      </Typography>
      <Typography variant="body2" gutterBottom>
        In my projects, I focus on accessibility, performance, and cross-browser
        compatibility to ensure that my applications are usable by a wide
        audience. I enjoy collaborating with designers and back-end developers
        to bring ideas to life and create cohesive digital products. Whether
        it's building a simple landing page or a complex single-page
        application, I am committed to delivering high-quality work that meets
        the needs of users and clients alike.
      </Typography>
      <Projects />
      <Typography id="contact" variant="h5" gutterBottom mt={6} mb={1}>
        Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the contact section of my portfolio.
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ color: "#cbd5e1" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum
        libero nec metus mollis mattis. Integer ultricies felis a condimentum
        malesuada. Praesent nunc dolor, dictum quis fringilla vitae, semper
        tempor risus. Maecenas ut porta orci, vitae luctus dolor. Maecenas
        suscipit hendrerit rhoncus. Vestibulum sed sapien feugiat mauris
        dignissim semper sit amet id tortor. Vivamus quis pellentesque purus.
        Donec porttitor, eros sed fringilla vulputate, augue orci tincidunt
        magna, ut lacinia augue lorem ut quam. Proin sed fringilla nisi, vel
        ullamcorper erat. Nulla vehicula ante sit amet lectus mollis, tincidunt
        viverra justo porta. Duis leo est, viverra malesuada lobortis eget,
        bibendum ut magna. Sed non lobortis arcu, in dictum neque. Nullam tempus
        lorem quis orci faucibus accumsan. Maecenas dictum ultricies tincidunt.
        Suspendisse a nisi vitae leo dignissim elementum. Vivamus malesuada
        libero vitae odio convallis tincidunt.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nulla vitae consectetur nisi, quis tempor orci.
        Pellentesque ante est, posuere vitae iaculis sit amet, consectetur at
        mi. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Quisque id aliquam neque. Nullam rhoncus libero
        id sollicitudin scelerisque. Fusce nec cursus nunc.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Quisque porttitor semper finibus. Aliquam a lectus a tellus finibus
        efficitur. Cras ultricies dolor vitae diam ullamcorper sollicitudin.
        Integer at convallis sapien. Nam ut tortor a nunc scelerisque tempor
        maximus vel massa. Integer accumsan tristique turpis et congue. Morbi
        viverra sollicitudin turpis, non auctor magna elementum suscipit.
        Pellentesque tempus sem vel lectus lobortis, sit amet tempor mauris
        cursus. Curabitur et facilisis magna. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Mauris
        lacinia enim sed nisl eleifend, eu finibus nisl condimentum. Etiam
        aliquet massa vel sapien feugiat sagittis.
      </Typography>
    </div>
  );
}
