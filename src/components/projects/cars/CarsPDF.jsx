import React from "react";
import { Page, Text, Document, View, } from "@react-pdf/renderer";
import { styles } from "../../../css/CarsPDFStyles.js";

const CarsPDF = (cars) => {
    return (
        <Document>
            <Page style={styles.page} size="A4">
                <Text style={styles.header}>Cars PDF</Text>
                <Text style={styles.text}>Here is a table showing all the cars.</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={[styles.tableCellHeader, { borderRight: 0 }]}>
                            <Text >Name</Text>
                        </View>
                        <View style={[styles.tableCellHeader, { borderRight: 0 }]}>
                            <Text >Model</Text>
                        </View>
                        <View style={[styles.tableCellHeader, { borderRight: 0 }]}>
                            <Text >Brand</Text>
                        </View>
                        <View style={[styles.tableCellHeader, { borderRight: 0 }]}>
                            <Text >Country</Text>
                        </View>
                        <View style={[styles.tableCellHeader, { borderRight: 0 }]}>
                            <Text >Creation Date</Text>
                        </View>
                        <View style={[styles.tableCellHeader,]}>
                            <Text >Update Date</Text>
                        </View>
                    </View>
                    {cars.cars.map((car, index) => (
                        <View key={index} style={styles.tableRow}>
                            <View style={[styles.tableCell, {borderTop:0, borderRight: 0 }]}>
                                <Text >{car.name}</Text>
                            </View>
                            <View style={[styles.tableCell, {borderTop:0, borderRight: 0 }]}>
                                <Text >{car.model}</Text>
                            </View>
                            <View style={[styles.tableCell, {borderTop:0, borderRight: 0 }]}>
                                <Text >{car.brand}</Text>
                            </View>
                            <View style={[styles.tableCell, {borderTop:0, borderRight: 0 }]}>
                                <Text>{car.country}</Text>
                            </View>
                            <View style={[styles.tableCell, {borderTop:0, borderRight: 0 }]}>
                                <Text >{car.creation_date}</Text>
                            </View>
                            <View style={[styles.tableCell, {borderTop:0, }]}>
                                <Text >{car.update_date}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                    fixed
                />
            </Page>
        </Document>
    );
}

export default CarsPDF;
