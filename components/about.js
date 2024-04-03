const e = React.createElement;

function AboutPage() {
  return (
    <div>
      <div id="about">
        <div id="name">Volitional AI Lab</div>

        <a href="https://twitter.com/ZeningQu"><span><i class="fab fa-twitter"></i></span><span>Twitter</span></a>
        <a href="https://github.com/ZeningQu"><span><i class="fab fa-github-alt"></i></span><span>GitHub</span></a>

        <div>
        Generative AI is enabling automation experiments in every sector of research, government, and industry:
        answering questions, summarizing text, describing images, generating code, manipulating data.
        But these experiments represent poor science: For the largest and most commonly used models,
        the training data, training process, and model details are unreleased and even undescribed. Biases are masked through reinforcement
        learning with human feedback, overconstraining legitimate use while offering an incomplete solution to false and harmful content.
        Quantitative results rely on conventional benchmarks that are not representative of practical experience, especially in challenging,
        sensitive domains. Ablation studies varying the training data, training process, or task details are expensive or impossible due to the
        scale and closed nature of the models. Papers report on model sensitivity to seemingly minor changes in prompting, suggesting weak causal links.
        And results may change day to day due to behind-the-scenes changes in the model.  The risks and limitations of these models are
        widely reported, but experimental evidence of proposed mitigation strategies are rare.
        <p></p>
        Our lab aims to conduct <i>rigorous</i> AI experiments to inform <i>practical</i> AI solutions, on <i>important</i> societal questions.
        We study foundational questions in the design and development of AI systems, as well as applied work on interesting problems.
        <p></p>
        We draw partnerships and projects primarily from the research community and the public sector, areas that are 1) typically underserved by market forces
        and 2) subject to a higher burden of evidence and sensitivity to risk.  Current work includes analyzing the conversational dynamics
        of local government hearings, information extraction from court cases to identify aggressive and illegal medical debt collections practices,
        using curated images to reduce bias in vision-language models, understanding context sensitivity in scientific quention answering,
        detecting and mitigating misinformation through synthetic data techniques, synthetic data generation to improve model robustness, automatic conflation of
        road and sidewalk data from different sources, extracting sidewalk data from satellite images, and more.
        <p></p>

        Our methods involve measuring the performance gap between so-called foundation models and smaller, open source, specially trained models.  We pursue controlled
        experiments, emphasizing the role of the training data in mediating model behavior.  We aim to understand the causal relationships between the inputs to AI systems (model design,
        training data, training and evaluation procedures) and the measurable outputs on relevant problems.  We are developing a gallery of practical recipes and case studies
        for domain adapation and model deployment that can be used by smaller labs and teams that may not have access to expertise.
        </div>
      </div>
    </div>
  );
}

const domContainer = document.querySelector('#about-page');
ReactDOM.render(e(AboutPage), domContainer);
