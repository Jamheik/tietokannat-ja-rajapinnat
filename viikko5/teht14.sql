DELIMITER //

CREATE PROCEDURE LisaaSuoritus (
    Etunimi VARCHAR(45),
    sukunimi VARCHAR(45),
    ojakso VARCHAR(45),
    arvosana INT
)
BEGIN
    DECLARE opiskeljaid INT DEFAULT 0;
    DECLARE opintojaksoid INT DEFAULT 0;

    SELECT opiskelijaID INTO opiskeljaid FROM Opiskelija WHERE Etunimi = Etunimi AND Sukunimi = sukunimi;

    IF opiskeljaid = 0 THEN
        SELECT 'Opiskelijaa ei ole' AS viesti;
    END IF;

    SELECT opintojaksoID INTO ojakso FROM Opintojakso WHERE Koodi = ojakso;

    IF opintojaksoid = 0 THEN
        SELECT 'Opintojaksoa ei ole' AS viesti;
    END IF;

    IF arvosana < 0 OR arvosana > 5 THEN
        SELECT 'Arvosana pitää olla välillä 0-5' AS viesti;
    END IF;

    INSERT INTO Arviointi (ArviointiID,OpintojaksoID, OpiskelijaID,Arvosana, Paivamaara)
    VALUES (NULL, ojakso, arvosana, opiskeljaid, opintojaksoid,CURDATE());

END; //

DELIMITER ;