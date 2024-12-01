import React from "react";
import styles from "./CVYearTitleDescription.module.css";
import CVUList from "../CVUList/CVUList";
import CVHeadlineSection from "../CVHeadlineSection/CVHeadlineSection";

export default function CVYearTitleDescriptionType({
  title,
  direction,
  items,
}) {
  return (
    <>
      <CVHeadlineSection title={title} />

      <div className={direction === "row" ? styles.row : styles.column}>
        {items.map((item) =>
          item.title !== "" ? (
            <div
              key={item.id}
              className={styles.subItemContainer}
              style={direction === "column" ? { width: "90%" } : {}}
            >
              <div className={styles.yearDiv}>{item.years}</div>
              <div className={styles.subItemNameAndDesc}>
                <h3 className={styles.subItemName}>{item.title}</h3>
                {item.descriptionType === "h3" && (
                  <h3
                    className={styles.subItemDesc}
                    style={item.years === "" ? { marginLeft: 0 } : {}}
                  >
                    {item.description}
                  </h3>
                )}
                {item.descriptionType === "ul" && (
                  <CVUList projects={item.description} />
                )}
              </div>
            </div>
          ) : item.descriptionType !== "" ? (
            <div key={item.id} className={styles.subItemNameAndDesc}>
              {item.descriptionType === "h3" && (
                <h3 className={styles.subItemDesc}>{item.description}</h3>
              )}
              {item.descriptionType === "ul" && (
                <CVUList projects={item.description} />
              )}
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
