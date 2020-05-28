import * as matter from 'gray-matter';
const fs = require('fs-extra');

/**
 * 获取 yaml 配置标题
 * @param readFilePath 文件路径
 */
const getTitle = readFilePath => {
    const {
        data: { title },
    } = matter(fs.readFileSync(readFilePath, 'utf8'));

    return title;
};

export { getTitle };
