import * as React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import style from "../style";

export default ({ items }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>My Projects</Text>
            {items.map((item) => (
                <>
                    <Link style={styles.text} src={item.url}>
                        {item.title}
                    </Link>

                    <View style={{ marginBottom: 6 }}>
                        <Text style={styles.subText}>{item.description}</Text>
                        <Text style={styles.subText}>{`Skills: ${item.stack.join(", ")}`}</Text>
                    </View>
                </>
            ))}
        </View>
    );
};
