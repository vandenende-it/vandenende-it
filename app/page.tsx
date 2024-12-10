import {BlogPosts} from 'app/components/posts'

export default function Page() {
  return (
      <section>
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
              Van Den Ende IT
          </h1>
          <p className="mb-4">
              {`I am an experienced Test Engineer and DevOps Specialist with over 15 years of expertise in 
        automated testing, cloud infrastructure, and CI/CD pipeline design. As the founder of Van Den Ende IT, 
        I work as an independent contractor, delivering tailored solutions for software quality assurance, 
        scalable test automation frameworks, and modern DevOps practices. 
        My work spans various industries, leveraging tools like AWS, Terraform, Docker, and Playwright to enhance 
        software reliability and streamline delivery processes.`}
          </p>


          <h2 className="mt-6 mb-4 text-xl font-semibold">Key Skills</h2>
          <ul className="list-disc pl-5">
              <li><strong>Programming & Testing Frameworks:</strong> Playwright, Cypress, Testcontainers, Selenium,
                  Serenity, Appium, JMeter, Java, TypeScript, C#, Python, Protractor.
              </li>
              <li><strong>Cloud & Infrastructure:</strong> AWS (CDK, Lambda, CloudFormation, ECS), GCP, Azure, Docker,
                  Kubernetes, Terraform, Mesos.
              </li>
              <li><strong>DevOps & CI/CD:</strong> Jenkins, GitLab, JetBrains Space, Azure DevOps, Groovy, Bash, Python,
                  Ruby.
              </li>
              <li><strong>Agile & Coaching:</strong> Agile testing practices, training teams in modern testing tools and
                  strategies, and improving testing processes.
              </li>
          </ul>

          <h2 className="mt-6 mb-4 text-xl font-semibold">Professional Experience</h2>
          <ul className="list-disc pl-5">
              <li>
                  <strong>Testing & Automation:</strong> Extensive experience designing scalable test automation
                  frameworks
                  using tools like Playwright, Selenium, and Cypress for API, end-to-end, and functional testing.
              </li>
              <li>
                  <strong>Cloud & Infrastructure:</strong> Designed and deployed infrastructure-as-code solutions using
                  AWS CDK,
                  Terraform, and CloudFormation to migrate on-premise systems to cloud environments.
              </li>
              <li>
                  <strong>Coaching & Training:</strong> Provided hands-on training to teams transitioning to modern
                  testing
                  frameworks and strategies.
              </li>
              <li>
                  <strong>DevOps Integration:</strong> Streamlined CI/CD pipelines using JetBrains Space, Jenkins, and
                  GitLab CI
                  to enable faster deployments and reliable testing.
              </li>
          </ul>


          <div className="my-8">
              <BlogPosts/>
          </div>
      </section>
  )
}
