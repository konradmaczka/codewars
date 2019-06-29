import java.lang.Math;

public class VolTank {
    public static int tankVol(int h, int d, int vt) {
        double r = (double) d / 2;
        double height = (double) h;
        double areaFull = Math.PI * Math.pow(r, 2);
        double areaSegment = r * r * Math.acos((r - height) / r) - (r - height) * Math.sqrt(2 * r * height - height * height);
        double percent = areaSegment / areaFull;    
        double result = vt * percent;
        return (int) Math.floor(result);
    }
}