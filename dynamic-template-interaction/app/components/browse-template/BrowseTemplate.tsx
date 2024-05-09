import styles from "./BrowseTemplate.module.css";

interface IBrowseTemplate {
  mainColor: string;
}

export default function BrowseTemplate({ mainColor }: IBrowseTemplate) {
  return (
    <div className={styles.browseTemplate}>
      <div className={styles.browseTemplateTitle}>
        Use this color palette and create beautiful designs and documents!
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.browseButton}
          style={{ background: mainColor }}
        >
          Browse templates
        </button>
      </div>
    </div>
  );
}
