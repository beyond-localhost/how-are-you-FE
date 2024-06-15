import { api } from '@lib/api/client.ts';
import { showErrorAlert } from '@/utils/error.ts';

export async function loader() {
    const response = await api.GET('/questions/answers', {
        params: {
            query: {
                startYear: '2024',
                startMonth: '3',
                endYear: '2024',
                endMonth: '3'
            }
        }
    });
    if (response.error) {
        showErrorAlert();
    }
    return null;
}

function QuestionList() {
    return <div></div>;
}

export default QuestionList;
