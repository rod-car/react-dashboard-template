import { ReactNode } from "react";
import { CardState } from "../components/CardStat.tsx";
import { AppCard } from "../components/AppCard.tsx";
import { BasicCard } from "../components/BasicCard.tsx";
import { Row } from "../components/Row.tsx";
import { Col } from "../components/Col.tsx";

export function Index(): ReactNode {
    return <>
        <h1 className="app-page-title">Overview</h1>
        <AppCard title="Test card" content="Lorem IPSUM" />

        <div className="row g-4 mb-4">
            <div className="col-6 col-lg-3">
                <CardState />
            </div>
            <div className="col-6 col-lg-3">
                <CardState />
            </div>
            <div className="col-6 col-lg-3">
                <CardState />
            </div>
            <div className="col-6 col-lg-3">
                <CardState />
            </div>
        </div>

        <Row className="g-4 mb-4">
            <Col n={4} lg={4}><BasicCard /></Col>
            <Col n={4} lg={4}><BasicCard /></Col>
            <Col n={4} lg={4}><BasicCard /></Col>
        </Row>
    </>
}