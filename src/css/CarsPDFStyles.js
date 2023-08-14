import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        
        padding: 20,
        paddingTop: 35,
        fontSize: 7,
        width: '505px',
        border: '1px solid black'
    },
    header: {
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text:{
        paddingBottom: 5
    },
    table: {
        display: 'table',
        width: '100%',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCellHeader: {
        padding: 6,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        flexGrow: 1,
        border: '1px solid black',
        width: '92px'
    },
    tableCell: {
        textAlign: 'center',
        flexGrow: 1,
        border: '1px solid black',
        width: '92px'
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
})