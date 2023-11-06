/* eslint-disable react/no-unescaped-entities */
const Blog = () => {
    return (
      <>
        <p className="my-4 font-concert text-center text-6xl text-orange-800">
          Blogs
        </p>
  
        <div className="my-2">
          <div
            tabIndex={0}
            className=" collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
            What is One way data binding?
            </div>
            <div className="collapse-content">
              <p>
              One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That's why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
            What is NPM in node.js?
            </div>
            <div className="collapse-content">
              <p>
              NPM, or Node Package Manager, is a package manager for the Node.js JavaScript runtime environment. It allows developers to install, manage, and update Node.js packages, which are reusable modules of code that can be used to build Node.js applications.NPM is a command-line tool that is included with Node.js. To use NPM, we simply run the npm command followed by the name of the package we want to install, update, or uninstall.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-8">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
            Different between Mongodb database vs mySQL database.
            </div>
            <div className="collapse-content">
              <p>
              MongoDB and MySQL are two popular database management systems (DBMS) that are used to store and manage data. However, they have different strengths and weaknesses, and are suited for different types of applications.

              MongoDB is generally faster than MySQL for read and write operations. This is because MongoDB does not need to enforce referential integrity constraints, which can slow down relational databases. MongoDB is also optimized for horizontal scalability, meaning that it can be scaled up by adding more servers.

              MongoDB is horizontally scalable, meaning that it can be scaled up by adding more servers. This makes it a good choice for applications that need to handle large amounts of data or traffic.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Blog;