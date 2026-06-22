import { premiumFitnessData } from '~/data/premiumFitnessData';
import '~/assets/css/PremiumFitness.css';

export function PremiumFitness() {
  return (
    <section className="premium-fitness-section">
      <div className="premium-fitness-container">
        <h2 className="premium-fitness-heading">{premiumFitnessData.heading}</h2>
        <p className="premium-fitness-subheading">{premiumFitnessData.subheading}</p>

        <div className="premium-fitness-grid">
          {premiumFitnessData.features.map((feature) => (
            <div key={feature.id} className="premium-fitness-feature">
              <div 
                className="premium-fitness-icon"
                dangerouslySetInnerHTML={{ __html: feature.iconSvg }}
              />
              <h3 className="premium-fitness-title">{feature.title}</h3>
              <p className="premium-fitness-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
